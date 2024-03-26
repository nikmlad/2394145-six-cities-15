import { LoadingStatus } from './consts';

export type City = {
  name: string;
  location: Location;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type OffersDataType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    };


export type InitialStateType = {
      city: string;
      offers: OffersDataType[];
      status: LoadingStatus | undefined;
    };

