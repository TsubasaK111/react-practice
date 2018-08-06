import { listObjects } from "../utils";

export const initialState = {
  currentView: "AllPhotos",
  photos: ["photo!"],
  selectedPhoto: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GO_HOME": {
      console.log("GOHOOOOOOOOOME");
      return { ...state,
        currentView: "AllPhotos"
      };
    }
    case "GET_ALL_PHOTOS_THUNK": {
      return { ...state,
        currentView: "AllPhotos",
        photos: action.photos
      }
    }
    default: {
      console.log('default triggered');
      return {...state};
    }
  }
};