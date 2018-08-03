import redux from "redux";
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
      listObjects().then((data) => {
        const s3domain = "http://react.sprint.s3.amazonaws.com/";
        const photos = data.map((photo) => {
          const url = s3domain + photo.Key;
          return { ...photo, url };
        });
        state.photos = photos;
        return state;
      });
      console.log(state);
      return state;
    }
    case "GET_ALL_PHOTOS": {
      listObjects().then((data) => {
        const s3domain = "http://react.sprint.s3.amazonaws.com/";
        const photos = data.map((photo) => {
          const url = s3domain + photo.Key;
          return { ...photo, url };
        });
        state.photos = photos;
        return state;
      });
    }
    default: {
      return state;
    }
  }
};

// export const store = redux.createStore(reducer, initialState);
