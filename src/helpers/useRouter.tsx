import { useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';




export function useRouter() {
    const params = useParams<{page?: string,id?: string}>();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();


    return useMemo(() => {
        return {
        
        push: history.push,
        replace: history.replace,
        pathname: location.pathname,
        state: location.state,

        query: {
            ...queryString.parse(location.search), 
            ...params,
            page: params.page,
            id: params.id
        },
        match,
        location,
        history
        };
    }, [params, match, location, history]);
}