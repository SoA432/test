"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import bountiesService from "../../../services/bounties";
import { BountyStates } from "enums/bounty-states.enum";
import { BountyStatesOverviw } from "@interfaces";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { LoadingSpinner } from "components/LoadingSpinner";
import Head from "next/head";
import { BountyApplicationStates } from "enums/bounty-application-states.enum";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import Link from "next/link";
import NavBarWithBackButton from '@components/NavBarWithBackButton';

interface MyBountiesProps { }

const MyBounties = ({ }: MyBountiesProps) => {
  // const router = useRouter();
  // const [showLoading, setShowLoading] = useState<boolean>(false);
  // const [openedSections, setOpenedSections] = useState<string[]>([]);
  // const [bountyStatesOverview, setBountyStatesOverview] =
  //   useState<BountyStatesOverviw>();

  // const fundedBountyStatesList = [
  //   {
  //     label: "Pending",
  //     value: BountyStates.PENDING,
  //     countKey: "pending_count",
  //   },
  //   {
  //     label: "Open",
  //     value: BountyStates.OPEN,
  //     countKey: "open_count",
  //   },
  //   {
  //     label: "Started",
  //     value: BountyStates.STARTED,
  //     countKey: "started_count",
  //   },
  //   // {
  //   //   label: 'Draft',
  //   //   value: BountyStates.DRAFT // Hide for MVP
  //   // },
  //   {
  //     label: "Submitted",
  //     value: BountyStates.SUBMITTED,
  //     countKey: "submitted_count",
  //   },
  //   {
  //     label: "Released",
  //     value: BountyStates.RELEASED,
  //     countKey: "released_count",
  //   },
  //   {
  //     label: "Done",
  //     value: BountyStates.DONE,
  //     countKey: "done_count",
  //   },
  //   {
  //     label: "Closed",
  //     value: BountyStates.CLOSED,
  //     countKey: "closed_count",
  //   },
  // ];

  // const huntingBountyStatesList = [
  //   {
  //     label: "Started",
  //     value: BountyStates.STARTED,
  //     countKey: "started_count",
  //   },
  //   {
  //     label: "Submitted",
  //     value: BountyStates.SUBMITTED,
  //     countKey: "submitted_count",
  //   },
  //   {
  //     label: "Released",
  //     value: BountyStates.RELEASED,
  //     countKey: "released_count",
  //   },
  //   {
  //     label: "Done",
  //     value: BountyStates.DONE,
  //     countKey: "done_count",
  //   },
  // ];

  // const bountyApplicationStatesList = [
  //   {
  //     label: "Open",
  //     value: BountyApplicationStates.OPEN,
  //     countKey: "open_count",
  //   },
  //   {
  //     label: "Approved",
  //     value: BountyApplicationStates.APPROVED,
  //     countKey: "approved_count",
  //   },
  //   {
  //     label: "Denied",
  //     value: BountyApplicationStates.DENIED,
  //     countKey: "denied_count",
  //   },
  //   {
  //     label: "Withdrawn",
  //     value: BountyApplicationStates.WITHDRAWN,
  //     countKey: "withdrawn_count",
  //   },
  // ];

  // useEffect(() => {
  //   getBountyStatesOverview();
  // }, []);

  // useEffect(() => {
  //   if (bountyStatesOverview) {
  //     const sectionsToOpen: string[] = [];
  //     Object.keys(bountyStatesOverview).forEach((key: string) => {
  //       if (bountyStatesOverview[key]) {
  //         let isExpanded = false;
  //         Object.keys(bountyStatesOverview[key]).forEach((stateKey) => {
  //           if (bountyStatesOverview[key][stateKey]) {
  //             isExpanded = true;
  //           }
  //         })
  //         if (isExpanded) {
  //           sectionsToOpen.push(key);
  //         }
  //       }
  //     })
  //     if (sectionsToOpen?.length) {
  //       setOpenedSections(sectionsToOpen)
  //     }
  //   }
  // }, [bountyStatesOverview]);

  // const getBountyStatesOverview = async () => {
  //   setShowLoading(true);
  //   const data = await bountiesService.getBountiesOverview();
  //   setBountyStatesOverview(data);
  //   setShowLoading(false);
  // };

  // const handleOpenSection = (section: string) => {
  //   openedSections.includes(section)
  //     ? setOpenedSections([...openedSections.filter((sec) => sec !== section)])
  //     : setOpenedSections([...openedSections, section]);
  // };

  return (
    <>
      {/* <Head>
        <title>My Bounties</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
      </Head> */}
      <div>My bounties</div>
    </>
  );
};

export default MyBounties;
