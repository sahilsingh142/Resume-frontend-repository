import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: null,
    name: "",
    proffesion: "",
    phone: "",
    email: "",
    country: "",
    github: "",

    skill: [],
    language: [],

    summary: "",

    companyName: "",
    jobTittle: "",
    startEndDate: "",
    location: "",
    companyDescription: "",

    projects:[],

    collageName:"",
    dgree:"",
    endDate:"",
    collageLocation:"",
}

const handleSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
         

        updateFild: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },

        skill: (state, action) => {
            state.skill.push(action.payload);
        },

        language: (state, action) => {
            state.language.push(action.payload);
        },

        summary: (state, action) => {
            state.summary = action.payload;
        },

        updateExp: (state,action) => {
            const {field,value} = action.payload
            state[field] = value;
        },
        companyDescription: (state, action) => {
            state.companyDescription = action.payload;
        },

        projects:(state,action)=>{
            state.projects.push(action.payload)
        },

        updateCollage:(state,action) =>{
            const {field,value} = action.payload;
            state[field] = value;
        },
    }
})

export const {
    updateFild,
    skill,
    language,
    summary,
    updateExp,
    companyDescription,
    updateCollage,
    projects} = handleSlice.actions;

export default handleSlice.reducer;