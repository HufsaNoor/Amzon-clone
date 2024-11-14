"use client"
import SearchResult from '@/components/SearchResult'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchPage = () => {
    const params = useParams();
    const query = params?.query; // Ensure `query` is safely accessed
    const { filterData, getFilteredData } = useSupabase();

    useEffect(() => {
        if (query) {
            getFilteredData(query.toString());
        }
    }, [query, getFilteredData]); // Removed the eslint-disable comment for better hook dependencies

    return (
        <div>
            <SearchResult filterData={filterData}/>
        </div>
    )
}

export default SearchPage;

