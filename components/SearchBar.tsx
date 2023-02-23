"use client";

import React, { useState } from "react";
import { useEffect } from "react";
// import IconButton from "@mui/material/IconButton";
// import Button from "../src/core/Button";
// import { Close } from "@mui/icons-material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { bountiesFiltersState } from "atoms/atoms";
// import { useRecoilState } from "recoil";
// import { Box, Input, Typography } from "@mui/material";
// import Image from "next/image";
// import InfoIcon from "../src/assets/InfoIcon.svg";
// import SearchIcon from "../src/assets/SearchIcon.svg";

interface SearchBarProps {
  // isSearchActive: boolean;
  // setIsSearchActive: (value: boolean) => void;
}

const SearchBar = ({ }: SearchBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("search");
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  // const [bountiesFilters, setBountiesFilters] =
  //   useRecoilState(bountiesFiltersState);
  const [searchInput, setSearchInput] = useState<string>("");
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    if (search && search !== searchInput) {
      setSearchInput(search as string);
      // setBountiesFilters({
      //   ...bountiesFilters,
      //   search: search as string,
      // });
    }
  }, [search]);

  useEffect(() => {
    if (search === searchInput) {
      return;
    }
    if (searchInput) {
      params.delete("search");
      params.append("search", searchInput);
      router.push(`${pathname}?${params.toString()}`);
    }

    if (searchInput === "") {
      params.delete("search");
      router.push(`${pathname}?${params.toString()}`);
    }
  }, [searchInput]);

  // useEffect(() => {
  //   if (isSearchActive) {
  //     inputRef.current?.focus();
  //   }
  // }, [isSearchActive]);

  return (
    <div style={{ background: 'white' }}>
      <input
          ref={inputRef}
          autoFocus={true}
          placeholder="Search issue, keyword, phrase"
          value={searchInput || ""}
          onChange={($event) => {
            const search: string = $event.target.value;
            setSearchInput(search);
          }}
          type="text"
    />
    </div>
  );
};

export default SearchBar;
