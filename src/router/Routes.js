import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RepoPage from '../pages/RepoPage/RepoUser';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FirstProfile from '../pages/FirstProfile/FirstProfile';
import StarredPage from '../pages/StarredPage/StarredPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/">
                    <FirstProfile />
                </Route>
                <Route exact path="/profile/:username">
                    <ProfilePage />
                </Route>
                <Route exact path="/repos/:username">
                    <RepoPage />
                </Route>
                <Route exact path="/starred/:username">
                    <StarredPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}