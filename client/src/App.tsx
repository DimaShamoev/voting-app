import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
} from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Poll {
    id: number;
    question: string;
    options: string[];
    creatorId: string;
}

const App: React.FunctionComponent = () => {
    const { user } = useUser();
    const [userPolls, setUserPolls] = useState<Poll[]>([]);


    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get<Poll[]>(
                    `http://localhost:3000/polls`
                );
                setUserPolls(response.data);
            } catch (err) {
                alert(`Error: ${err}`);
            }
        };
        fetching()
    }, [user]);

    if (!user) {
        return (
            <div>
                <SignedOut>
                    Signed out
                    <SignInButton />
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
                <div className="data">
                    dd
                    {userPolls.map((poll, index) => (
                        <div className="poll-block" key={index}>
                            <p>{poll.question}</p>
                            <p>{poll.options}</p>
                            <p>------------------</p>
                            <p>------------------</p>
                            <p>------------------</p>
                        
                        </div>
                    ))}
                </div>
            </SignedIn>
        </div>
    );
};

export default App;
