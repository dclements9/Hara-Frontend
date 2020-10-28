export const getLessons = () => {
    return dispatch => {
        return fetch(`https://hara-back-api.herokuapp.com/api/v1/lessons`)
            .then(resp => resp.json())
            .then(lessons => dispatch({ type: 'LESSONS_FETCH_SUCCESS', payload: lessons}))
    }
}

export const createLesson = (lesson, history, date) => {
    if (date) {lesson.date = date.toISOString().split("T")[0]}

    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/lessons`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ lesson })
        })
        .then(resp => resp.json())
        .then(lesson => {dispatch({ type: 'LESSON_CREATED', payload: lesson})
        history.push(`/lessons`)
        })
    }
}

export const updateLesson = (lesson, id, history, users) => {
    lesson.users = users;

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
        .then(lesson => { dispatch({ type: 'LESSON_UPDATED', payload: lesson})
            history.push(`/lessons/${id}`)
        })
    }
}

export const deleteLesson = (id, history) => {
    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/lessons/${id}`,{
            method: 'DELETE'})
            .then( resp => resp.json())
            .then(id => {
                dispatch({ type: "DELETE_LESSON_SUCCESS", payload: id })
                history.push("/lessons")
            })
    }
}
