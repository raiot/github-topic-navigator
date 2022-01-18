import { useState } from "react";
import { Search } from "../models/Search";

interface SearchInputProps {
    actions: any;
}

export const SearchInput: React.FC<SearchInputProps> = ({ actions }) => {
    const [term, setTerm] = useState<string>('');
    const onChange = (e) => {
        setTerm(e.target.value);
    }
    const onClick = () => {
        const search: Search = { term };
        actions.searchMutation(search);
    }

    return (
        <>
            <input type="text" value={term} onChange={onChange} />
            <button onClick={onClick}>Search</button>
        </>
    )
}