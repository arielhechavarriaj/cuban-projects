
import {
  CommonViewState,
  ICategory,
  IProject,
} from './../../models/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

/**
 * Establece los valores iniciales del estado del CommonView.
 */
const createInitialState = (): CommonViewState => {
  return {
    searchQuery: '',
    categorySelected: { name: '', category: '', description: '' ,id:''},
    projectSelected: { name: '', description: '', url: '', id: '' },
    projects:[],
    toogleSearchSideNav:false
  };
};

/**
 * Clase para almacenar el estado de CommonView.
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'state-cuban-projects', resettable: true })
export class CommonViewStore extends Store<CommonViewState> {
  /**
   * Constructor
   */
  constructor() {
    // @ts-ignore
    super(createInitialState());
    this.setLoading(false);
  }

  /**
   * Actualiza en el estado el parametro para buscar
   * @param searchQuery
   */
  updateSearchQuery(searchQuery: string) {
    this.update((state) => ({ ...state, searchQuery: searchQuery }));
  }

  /**
   * Actualiza en el estado el parametro para buscar
   * @param groupId
   */
  updateCategorySelected(category: ICategory) {
    this.update((state) => ({ ...state, categorySelected: category }));
  }

  /**
   * Actualiza en el estado el parametro para buscar
   * @param groupId
   */
  updateProjectSelected(project: IProject) {
    this.update((state) => ({ ...state, projectSelected: project }));
  }

  updateProjects(projects: IProject[]) {
    this.update((state) => ({ ...state, projects: projects }));
  }
  updateToogleSearchSideNav(status:boolean){
    this.update((state) => ({ ...state, toogleSearchSideNav: status }));

  }
}
