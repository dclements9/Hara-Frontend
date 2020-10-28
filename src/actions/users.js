export const getUsers = () => {
    return dispatch => {
        return fetch(`https://hara-back-api.herokuapp.com/api/v1/users`)
            .then(resp => resp.json())
            .then(users => dispatch({ type: 'USERS_FETCHED', payload: users}))
    }
}

export const createUser = (user, history) => {
    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/users`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(user => { dispatch({type: 'USER_CREATED', payload: user})
        history.push(`/users`)
        })
    }
}

export const updateUser = (user, id, history) => {
    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/users/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(user => { dispatch({ type: 'USER_UPDATED', payload: user})
            history.push(`/users/${id}`)
        })
    }
}

export const deleteUser = (id, history) => {
    return dispatch => {
        fetch(`https://hara-back-api.herokuapp.com/api/v1/users/${id}`,{
            method: 'DELETE'})
            .then( resp => resp.json())
            .then(id => {
                dispatch({ type: "DELETE_USER_SUCCESS", payload: id })
                history.push("/users")
            })
    }
}