export default function({friend}){
    const {name,email,phone,username,website} = friend;
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Username: {username}</p>

            <p>Website: {website}</p>
        </div>
    )
}