export const LinkComponent = ({linkhref, link}: any) => {
    return (
        <a href={linkhref}
            style={{
                textDecoration: 'none',
                color: '#FFFFFF',
            }}>
            {link}
        </a>
    )
}