import { Route, Routes } from "react-router-dom";
import { ListAllUsersPage } from "../Pages/ListAllUsers";
import { ListAllProjectsPage } from "../Pages/ListAllProjects";
import { AddUserPage } from "../Pages/AddUser";
import { UserDetailPage } from "../Pages/UserDetails";

export function Content() {
  return (
    <div style={{ width: "100vw" }}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/users" element={<div>Users</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/listUsers" element={<ListAllUsersPage />} />
        <Route path="/addUser" element={<AddUserPage />} />
        <Route path="/listProjects" element={<ListAllProjectsPage />} />
        <Route path="/addProject" element={<div>Add Project</div>} />
        <Route path="/userPage" element={<UserDetailPage />} />
      </Routes>
    </div>
  );
}
