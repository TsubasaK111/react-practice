import { listObjects } from "../utils";

export const initialState = {
  currentView: "AllPhotos",
  photos: ["photo!"],
  selectedPhoto: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GO_HOME": {
      // DO SOMETHING!
      state.currentView = "AllPhotos";
      console.log("GOHOOOOOOOOOME");
      console.log(state);
      return state;
    }
    // case "GET_ALL_PHOTOS": {
    //   return listObjects().then((data) => {
    //     const s3domain = "http://react.sprint.s3.amazonaws.com/";
    //     console.log(data);
    //     const photos = data.map((photo) => {
    //       const url = s3domain + photo.Key;
    //       return { ...photo, url };
    //     });
    //     state.photos = photos;
    //     return state;
    //   });
    // }
    case "GET_ALL_PHOTOS_THUNK": {
      console.log(action);
      state.currentView = "AllPhotos"
      state.photos = action.photos;
      return state;
    }

    default: {
      console.log('default');
      console.log();
      return state;
    }
  }
};