import StatusIndicator from "../../Component/StatusIndicator";
import useUserData from "./useUserData.hook";
import dateFormat from "../../utils/dateFormat";
export default function Home() {
  const { userData, sortUserData, sortState } = useUserData();

  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th onClick={() => sortUserData("firstName")}>
            First Name{" "}
            <span className="material-icons">
              {sortState !== "asc" ? "arrow_drop_down" : "arrow_drop_up"}
            </span>
          </th>
          <th onClick={() => sortUserData("lastName")}>Last Name</th>
          <th>Company</th>
          <th>Job Title</th>
          <th>State</th>
          <th>Admin</th>
          <th>Joined At</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.company}</td>
            <td>{user.jobTitle}</td>
            <td>{user.state}</td>
            <td>
              <StatusIndicator status={user.isSiteAdmin} />
            </td>
            <td>{dateFormat(user.dateJoined)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
