import {api} from '@src/lib/api'
import {GET_PAGE} from '@src/queries/page/get-page'

export async function makeGetPage(uri: string) {
  const data = await api(GET_PAGE, {variables: {uri: uri}})
  return data?.page
}
