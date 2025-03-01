export function MembershipsIndex({ memberships }) {
 
  return (
    <div>
      <h1>All memberships</h1>
      {/* {JSON.stringify(memberships[0])} */}
      {memberships.map(membership => (
        <div key={membership.id}>
          <p><b>name:</b> {membership.name}</p>
          <p><b>price:</b> {membership.price}</p>
          <p><b>benefits:</b> {membership.benefits}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}