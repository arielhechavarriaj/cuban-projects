import { IProject } from './../../interfaces/interfaces';
import { CommonViewStore } from './../../../+state/common/common-store.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonViewQuery } from 'src/app/+state/common/common-query.service';
import { ICategory } from '../../interfaces/interfaces';

/**
 * Servicio para el manejo común del estado de la applicacion.
 */
@Injectable({
  providedIn: 'root',
})
export class CommonStateService  {
  /**
   * Observable booleano para identificar si es ub grupo tipo o no.
   */
  searchQuery$: Observable<string>;
 categorySelected$: Observable<ICategory>;
 projectSelected$: Observable<IProject>;
 projects$: Observable<IProject[]>;
 toogleSearchSideNav$:Observable<boolean>;
 loading$:Observable<boolean>;
  /**
   * Constructor
   *
   * @param commonViewStore Store del CommonView.
   * @param commonViewQuery Query del CommonView.
   */
  constructor(
    private readonly commonViewStore: CommonViewStore,
    private readonly commonViewQuery: CommonViewQuery
  ) {
    this.searchQuery$ = this.commonViewQuery.selectSearchQuery$();
    this.categorySelected$ = this.commonViewQuery.selectCategorySelected$();
    this.projectSelected$ = this.commonViewQuery.selectProjectSelected$();
    this.projects$ = this.commonViewQuery.selectProjects$();
    this.toogleSearchSideNav$=this.commonViewQuery.selectToogleSearchSideNav$();
    this.loading$=this.commonViewQuery.selectLoading();
  }

  /**
   * Actualiza en el store la propiedad de typeFilters.
   * @param typeFilters
   */
  updateSearchQuery(typeFilters: any) {
    this.commonViewStore.updateSearchQuery(typeFilters);
  }

  /**
   * Actualiza en el store la propiedad de categorySelected
   * @param categorySelected
   */
   updateCategorySelected(categorySelected: ICategory) {
    this.commonViewStore.updateCategorySelected(categorySelected);
  }

  /**
   * Actualiza en el store la propiedad de projectsSelected.
   * @param projectsSelected
   */
   updateProjectSelected(projectsSelected: IProject) {
    this.commonViewStore.updateProjectSelected(projectsSelected);
  }


  updateProjects(projects: IProject[]) {
    this.commonViewStore.updateProjects(projects);
  }
   /**
   * Actualiza en el store la propiedad de projectsSelected.
   * @param projectsSelected
   */
    updateToogleSearchSideNav( status : boolean) {
      this.commonViewStore.updateToogleSearchSideNav(status);
    }

    updateLoading( status : boolean) {
      this.commonViewStore.setLoading(status);
    }
}
