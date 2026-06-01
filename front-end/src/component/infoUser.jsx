export default function InfoUser({ user, onLogOutHandler, isExpanded }) {
    const displayName = user?.username || user?.name || "User";

    return (
        <div className={`info-user ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="foto-user">
                <img src="/default.jpg" alt="Profile" />
            </div>
            {isExpanded && (
                <div className="detail-user">
                    <p className="nama-user"><strong>{displayName}</strong></p>
                    <button onClick={onLogOutHandler}>Log Out</button>
                </div>
            )}
        </div>
    );
}