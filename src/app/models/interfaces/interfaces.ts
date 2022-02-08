
export interface ICategory {
  category: string;
  description: string;
  name?: string;
  icon?: string;
  id:string;
}
export interface IProject {
  id: string;
  name: string;
  url: string;
  description: string;
  image?:string;
  loadImage?:boolean
}


/**
 * Interfaz del estado CommonView, estado común para el manejo de ambas definiciones de grupo.
 */
 export interface CommonViewState {
   searchQuery:string; //"Parametro para hacer busqueda en los projects",
   categorySelected:ICategory
   projectSelected:IProject,
   toogleSearchSideNav:boolean
   projects:IProject[]

 }
