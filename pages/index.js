import Cookies from 'js-cookie'

const Index = () => {
    return (
        <div>
        <h1>If you see this, that means you have made it. Below are accessToken</h1>
        <h2>{Cookies.get('shopify_access_token')}</h2>
        </div>
    );
}

export default Index;