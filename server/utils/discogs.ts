export interface DiscogsFolder {
  id: number
  name: string
  count: number
  resource_url: string
}

export interface DiscogsFoldersResponse {
  folders: DiscogsFolder[]
}

export interface DiscogsCollectionField {
  id: number
  name: string
  type: string
}

export interface DiscogsCollectionFieldsResponse {
  fields: DiscogsCollectionField[]
}

export interface DiscogsArtist {
  name: string
}

export interface DiscogsBasicInformation {
  id: number
  title: string
  thumb: string
  cover_image: string
  artists: DiscogsArtist[]
}

export interface DiscogsFieldValue {
  field_id: number
  value: string
}

export interface DiscogsCollectionItem {
  id: number
  instance_id: number
  date_added: string
  basic_information: DiscogsBasicInformation
  notes?: DiscogsFieldValue[]
}

export interface DiscogsCollectionReleasesResponse {
  pagination: {
    pages: number
    page: number
    per_page: number
    items: number
  }
  releases: DiscogsCollectionItem[]
}

const DISCOGS_API_BASE = 'https://api.discogs.com'
const PHYSICAL_FOLDER_NAME = 'Physical'

// Discogs requires a descriptive User-Agent identifying your app + contact.
// Update this to something that identifies your actual deployment.
const USER_AGENT = 'nathan.lumaa.fr/1.0'

function getAuthHeaders() {
  const token = process.env.DISCOGS_TOKEN
  if (!token) {
    throw new Error('Missing DISCOGS_TOKEN environment variable')
  }
  return {
    'User-Agent': USER_AGENT,
    Authorization: `Discogs token=${token}`
  }
}

function getUsername() {
  const username = process.env.DISCOGS_USERNAME
  if (!username) {
    throw new Error('Missing DISCOGS_USERNAME environment variable')
  }
  return username
}

async function discogsFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${DISCOGS_API_BASE}${path}`, {
    headers: getAuthHeaders()
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Discogs API error ${res.status} on ${path}: ${body}`)
  }

  return res.json() as Promise<T>
}

/**
 * Finds the folder id for the user's "Physical" collection folder.
 * Throws rather than silently falling back to "All" (id 0) or
 * "Uncategorized" (id 1) if it's missing or renamed.
 */
export async function getPhysicalFolderId(): Promise<number> {
  const username = getUsername()
  const { folders } = await discogsFetch<DiscogsFoldersResponse>(
    `/users/${username}/collection/folders`
  )

  console.log(folders);

  const physical = folders.find(
    (f) => f.name.toLowerCase() === PHYSICAL_FOLDER_NAME.toLowerCase()
  )

  if (!physical) {
    throw new Error(
      `No "${PHYSICAL_FOLDER_NAME}" folder found on Discogs account "${username}". ` +
        `Available folders: ${folders.map((f) => f.name).join(', ')}`
    )
  }

  return physical.id
}

/** Maps custom collection field id -> field name (unused unless you add Discogs Notes fields later). */
export async function getCollectionFieldMap(): Promise<Map<number, string>> {
  const username = getUsername()
  const { fields } = await discogsFetch<DiscogsCollectionFieldsResponse>(
    `/users/${username}/collection/fields`
  )
  return new Map(fields.map((f) => [f.id, f.name]))
}

/** Fetches every release in the given folder, following pagination. */
export async function getAllFolderReleases(
  folderId: number
): Promise<DiscogsCollectionItem[]> {
  const username = getUsername()
  const perPage = 100
  let page = 1
  let totalPages = 1
  const items: DiscogsCollectionItem[] = []

  do {
    const data = await discogsFetch<DiscogsCollectionReleasesResponse>(
      `/users/${username}/collection/folders/${folderId}/releases` +
        `?page=${page}&per_page=${perPage}&sort=added&sort_order=desc`
    )
    items.push(...data.releases)
    totalPages = data.pagination.pages
    page += 1
  } while (page <= totalPages)

  return items
}