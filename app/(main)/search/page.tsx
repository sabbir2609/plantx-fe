"use client";

import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import Loading from "@/app/loading";

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

interface SearchResponse {
  items?: SearchResult[];
  queries?: {
    nextPage?: Array<{ startIndex: number }>;
    previousPage?: Array<{ startIndex: number }>;
  };
  searchInformation?: {
    totalResults: string;
  };
}

export default function SearchPage() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const RESULTS_PER_PAGE = 10;

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CUSTOME_SEARCH_ID;
  const CX = process.env.NEXT_PUBLIC_CX;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const fetchSuggestions = async (input: string) => {
    if (input.length < 3) return;
    try {
      const response = await fetch(
        `/api/suggestions?q=${encodeURIComponent(input)}`,
      );
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    setMounted(true);
    if (debouncedQuery) {
      fetchSuggestions(debouncedQuery);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  const handleSearch = async (e: React.FormEvent, page = 1) => {
    e?.preventDefault();
    if (!query) return;

    setLoading(true);
    setResults([]);
    const startIndex = (page - 1) * RESULTS_PER_PAGE + 1;

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(
          query,
        )}&start=${startIndex}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results.");
      }

      const data: SearchResponse = await response.json();
      setResults(data.items || []);
      setTotalResults(parseInt(data.searchInformation?.totalResults || "0"));
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    if (query) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  if (!mounted) return null;

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <div className="flex min-h-screen flex-col items-center bg-base-200 p-6">
      <div className="my-5 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-primary">Search</h1>
        <p className="text-lg text-secondary">Enhanced by Google</p>
      </div>

      <div className="relative w-full max-w-xl">
        <form onSubmit={handleSearch} className="mb-6 flex">
          <div className="relative flex-1" ref={dropdownRef}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="input input-bordered w-full"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full rounded-lg bg-base-100 shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-2 hover:bg-base-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setQuery(suggestion);
                      setSuggestions([]);
                      handleSearch(e, 1);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary ml-2"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {loading && <Loading />}

      {results.length > 0 && (
        <div className="w-full max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">
            Results ({totalResults} found):
          </h2>
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="rounded-lg bg-base-100 p-4 shadow hover:shadow-lg"
              >
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-lg font-bold text-primary">
                    {result.title}
                  </h3>
                  <p className="text-sm text-base-content">{result.snippet}</p>
                  <span className="text-sm text-secondary">{result.link}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (
              <button
                key={i}
                onClick={(e) => handleSearch(e, i + 1)}
                className={`btn btn-sm ${
                  currentPage === i + 1 ? "btn-primary" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <p className="mt-4 text-lg text-secondary">No results found.</p>
      )}
    </div>
  );
}
