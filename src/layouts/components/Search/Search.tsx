"use client";

import * as React from "react";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Mock search results data
interface SearchResult {
  id: number;
  title: string;
  category: string;
}

const mockResults: SearchResult[] = [
  { id: 1, title: "Valentine's Day Special Gift Box", category: "Gifts" },
  { id: 2, title: "Heart Shaped Pendant Necklace", category: "Jewelry" },
  { id: 3, title: "Romantic Dinner Set for Two", category: "Kitchen" },
  { id: 4, title: "Love Letter Writing Kit", category: "Stationery" },
  { id: 5, title: "Couple's Matching Watches", category: "Accessories" },
];
const trendingSearches = [
  "valentines gift for him",
  "a boy and his dog",
  "a girl and her dog",
  "valentines gift",
  "bottle lamp",
];

export default function SearchBar() {
  const [value, setValue] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  // Simulated search function
  const handleSearch = React.useCallback((query: string) => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const filtered = mockResults.filter((result) =>
        result.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 300);
  }, []);

  React.useEffect(() => {
    if (value.length > 0) {
      handleSearch(value);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [value, handleSearch]);

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full  mx-auto">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="relative ">
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search"
              aria-label="Search input"
              className=" w-10/12 lg:w-full lg:pl-4 lg:pr-12 h-12 rounded-full  border-black"
              value={value}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className=" absolute max-xs:right-[70px] max-sm:right-20 sm:right-[103px] lg:right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] block !visible p-0"
          align="start"
          sideOffset={4}
        >
          {value.length === 0 ? (
            // Show trending searches when no input
            <div className="p-4">
              <h3 className="text-sm font-semibold text-orange-500 mb-3">
                TRENDING SEARCHES
              </h3>
              <div className="space-y-3">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      setValue(search);
                      handleSearch(search);
                      inputRef.current?.focus();
                    }}
                  >
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                    <span>{search}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : loading ? (
            <div className="p-4 text-center text-sm text-gray-500">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {results.map((result) => (
                <button
                  key={result.id}
                  className="flex flex-col w-full px-4 py-2 text-left hover:bg-gray-50"
                  onClick={() => {
                    setValue(result.title);
                    setIsOpen(false);
                    inputRef.current?.focus();
                  }}
                >
                  <span className="text-sm font-medium">{result.title}</span>
                  <span className="text-xs text-gray-500">
                    {result.category}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-gray-500">
              No results found
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
