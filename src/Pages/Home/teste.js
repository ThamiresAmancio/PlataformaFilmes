import { api } from '../service/api';

 const api_key = '23ef43567db026524d99518cb6f8a479';

 const languagePtBr = 'pt-BR'

export default {
  getHomeList: async (id) => {
    return [{
      slug: 'actions',
      title: 'teste',
      items: await api.get(`/discover/movie?with_genres=${id}&language=pt-BR&api_key=${api_key}`)
  },]
  }
}