import { environment } from '../environment/environment';
import { Image } from '../models/model';

export const searchImage = async (query: string): Promise<Image | null> => {
  const formattedQuery = query.replaceAll(' ', '+');

  return fetch(`${environment.unsplashConfig.URI}/search/photos/?query=${formattedQuery}&client_id=${environment.unsplashConfig.ACCESS_KEY}`, {
    method: 'GET'
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    }
    return null;
  })
    .then(res => {
      if (res != null) {
        const { alt_description, urls } = res.results[0];

        return {
          alt: alt_description,
          src: urls.regular
        } as Image;
      }
      return null;
    });
};