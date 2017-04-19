import store from '../store';
import { fetchPhotos } from '../actions';

export function onPhotoEnter() {
  store.dispatch(fetchPhotos());
}