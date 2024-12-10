import { SignIn, SignInButton,SignedIn,SignedOut,UserButton,useUser } from "@clerk/clerk-react";
import React from "react";

const App: React.FunctionComponent = () => {
    const { user } = useUser();

    if (!user) {
        return (
            <div>
                <SignedOut>
                    
                </SignedOut>
            </div>
        );
    }

    return (
        <div className="App">
            <SignedIn>
                Signed In
                <UserButton />
                <p>{user?.username}</p>
                <p>Your User ID: {user?.id}</p>
            </SignedIn>
        </div>
    );
};

export default App;
