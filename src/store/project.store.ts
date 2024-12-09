import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  _id: string;
  projectName: string;
  projectTechStack: string;
  description?: string;
  authorId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectStoreType {
  projects: Project[];
  currentProject?: Project;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (projectId: string, updatedData: Partial<Project>) => void;
  deleteProject: (projectId: string) => void;
  setCurrentProject: (projectId: string) => void;
}

export const useProjectStore = create<ProjectStoreType>()(
  persist(
    (set, get) => ({
      projects: [],
      currentProject: undefined,

      setProjects: (projects) => set({ projects }),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),

      updateProject: (projectId, updatedData) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project._id === projectId
              ? { ...project, ...updatedData }
              : project,
          ),
          currentProject:
            state.currentProject?._id === projectId
              ? { ...state.currentProject, ...updatedData }
              : state.currentProject,
        })),

      deleteProject: (projectId) =>
        set((state) => ({
          projects: state.projects.filter(
            (project) => project._id !== projectId,
          ),
          currentProject:
            state.currentProject?._id === projectId
              ? undefined
              : state.currentProject,
        })),

      setCurrentProject: (projectId) => {
        const project = get().projects.find(
          (project) => project._id === projectId,
        );
        if (project) {
          set({ currentProject: project });
        }
      },
    }),
    {
      name: 'project-store',
      partialize: (state) => ({
        projects: state.projects,
        currentProject: state.currentProject,
      }),
    },
  ),
);
