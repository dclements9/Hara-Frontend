export const setCurrentLesson = lesson => {
    return {
        type: "SET_CURRENT_LESSON",
        lesson
    }
}

export const associateUser = (lesson, id, history) => {
    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/lessons/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ lesson })
        })
        .then(resp => resp.json())
        .then(lesson => { dispatch({ type: 'USER_ASSOCIATED', payload: lesson})
            window.location.reload(false)
        })
    }
}
