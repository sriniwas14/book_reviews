import React from 'react'

export const UpdateNavigationObject = (dispatch) = (data, callback) => {
    dispatch({
        type: "",
        payload: {
            navigation: data
        }
    })
}
