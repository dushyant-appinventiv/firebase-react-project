// const initialState = [];
const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      state.push(action.payload);
      return state;
    case "UPDATE_PROJECTS":
      state = { ...action.payload };
      return state;
    default:
      return state;
  }
};

export default projectReducer;
