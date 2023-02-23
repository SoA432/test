"use client";

// import { useRouter, usePathname } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import {
//   bountyPayloadState,
//   navDrawerProfileState,
//   navDrawerUserState,
//   openDrawerState,
//   userInfoState,
// } from "../../../atoms/atoms";
// import { BountyData, BountyPayload, BountyApplication } from "@interfaces";
// import bountiesService from "services/bounties";
// import ShareIcon from "src/assets/ShareIcon.svg";
// import FlagIcon from "src/assets/FlagIcon.svg";
// import FavouriteIcon from "src/assets/FavouriteIcon.svg";
// import FavouriteIconActive from "src/assets/FavouriteIconActive.svg";
// // MUI
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { LoadingSpinner } from "components/LoadingSpinner";
// import { Box, Divider } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { useSnackbar } from "notistack";
// import Head from "next/head";
// import Avatar from "components/Avatar";
// import { BountyStates } from "enums/bounty-states.enum";
// import NavBarWithBackButton from "@components/NavBarWithBackButton";

const Bounty = ({ searchParams }: any) => {
  // const { t } = useTranslation();
  // const router = useRouter();
  // const pathname = usePathname();
  // const bountyId = pathname!.substring(pathname!.lastIndexOf("/") + 1);

  // const [bountyInfo, setBountyInfo] = useState<BountyData>();

  // const [openDrawer, setOpenDrawer] = useRecoilState(openDrawerState);

  // useEffect(() => {
  //   console.log('openDrawer', openDrawer);
  // }, [])

  // const [userProfile, setUserProfile] = useRecoilState(userInfoState);
  // const [navDrawerUser, setNavDrawerUser] = useRecoilState(navDrawerUserState);
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const [myApplication, setMyApplication] = useState<BountyApplication>();
  // useEffect(() => {
  //   if (bountyId) {
  //     getBounty(bountyId as string);
  //     getApplications(bountyId as string);
  //   }
  // }, [bountyId]);

  // const getApplications = async (bounties: string) => {
  //   try {
  //     const { data, meta } = await bountiesService.getApplications(
  //       1,
  //       20,
  //       [],
  //       [],
  //       [bounties],
  //       [userProfile?.username as string]
  //     );
  //     if (data.length !== 0) {
  //       setMyApplication(data[0]);
  //       console.log({ data });
  //     }
  //   } catch (error: any) {
  //     console.log({ error });
  //   }
  // };
  // const getBounty = async (bountyName: string) => {
  //   try {
  //     const bountyData = await bountiesService.getBountyByName(bountyName);
  //     if (bountyData) {
  //       // TODO: bounty not exist message
  //       setBountyInfo(bountyData.data);
  //     }
  //   } catch (error: any) {
  //     if (error.response.status === 404) {
  //       router.push("/");
  //     }
  //   }
  // };

  // const handleCheckout = () => {
  //   router.push(`../checkout/${bountyInfo!.name}`, undefined);
  // };

  // const handleClickShare = () => {
  //   // navigator.clipboard.writeText(router.basePath);
  // };
  // const handleOnClickUsername = (username: string) => {
  //   setNavDrawerUser(username);
  //   setOpenDrawer(true);
  //   // router.push(`../profiles/${username}`, undefined, { shallow: true })
  // };

  // const handleEditBounty = () => {
  //   // setCreateBountyPayload(bountyInfo);
  //   router.push(`${pathname}/update`);
  // };

  // const handleAddToBookmarks = async () => {
  //   try {
  //     await bountiesService.addBountyToBookmarks(bountyInfo?.name!);
  //     setBountyInfo({
  //       ...bountyInfo,
  //       is_following: true,
  //     } as BountyData);
  //     enqueueSnackbar("Added to bookmarks!", { variant: "success" });
  //   } catch (error: any) {
  //     enqueueSnackbar(
  //       error?.response?.data?.errors[0]?.detail || "Something went wrong",
  //       { variant: "error" }
  //     );
  //   }
  // };

  // const handleRemoveFromBookmarks = async () => {
  //   try {
  //     await bountiesService.removeBountyFromBookmarks(bountyInfo?.name!);
  //     setBountyInfo({
  //       ...bountyInfo,
  //       is_following: false,
  //     } as BountyData);
  //     enqueueSnackbar("Removed from bookmarks!", { variant: "success" });
  //   } catch (error: any) {
  //     enqueueSnackbar(
  //       error?.response?.data?.errors[0]?.detail || "Something went wrong",
  //       { variant: "error" }
  //     );
  //   }
  // };

  // const handleApplyButton = () => {
  //   router.push(`${window.location.href}/apply`);
  // };

  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "1rem",
          height: "100%",
        }}
      >
        fsafsafs
      </div>
    </>
  );
};

export default Bounty;

