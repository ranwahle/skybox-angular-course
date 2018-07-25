import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ShowsState} from './show.reducer';

export const getShowsState = createFeatureSelector<ShowsState>('shows')

export const getShowsSelector = createSelector(getShowsState, state => state.shows);
