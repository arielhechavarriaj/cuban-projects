import { CommonViewStore } from './common-store.service';
import {
  CommonViewState,
  IProject,
  ICategory,
} from './../../models/interfaces/interfaces';

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

/**
 * Clase para realizar consultas sobre el estado CommonView.
 */
@Injectable({ providedIn: 'root' })
export class CommonViewQuery extends Query<CommonViewState> {
  /**
   * Constructor
   * @param store
   */
  constructor(store: CommonViewStore) {
    super(store);
  }

  /**
   * Selecciona en el estado el parametro de busquedad.
   */
  selectSearchQuery$ = (): Observable<string> => {
    return this.select((state) => state.searchQuery);
  };

  /**
   * Selecciona en el estado el parametro de busquedad.
   */
  selectProjectSelected$ = (): Observable<IProject> => {
    return this.select((state) => state.projectSelected);
  };

  selectProjects$ = (): Observable<IProject[]> => {
    return this.select((state) => state.projects);
  };

  /**
   * Selecciona en el estado el parametro de busquedad.
   */
  selectCategorySelected$ = (): Observable<ICategory> => {
    return this.select((state) => state.categorySelected);
  };

  selectToogleSearchSideNav$=(): Observable<boolean> => {
    return this.select((state) => state.toogleSearchSideNav);
  };
}
