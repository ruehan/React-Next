import { getInfo, getList } from "@/api/api";
import { InfoState, dataState } from "@/atom";
import InfoBlock from "@/mocules/Info/InfoBlock";
import ListBlock from "@/mocules/Lists/ListBlock";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import Cookies from 'js-cookie'

export default function InfoTemplate() {

    const [listData, setListData] = useRecoilState(dataState)
    
    const listName = Cookies.get('listName')

    const {isLoading, isError, data, error} = useQuery(["getInfo", listName], ({queryKey}) => getInfo(queryKey[1]), {
      retry: 0,
      onSuccess: data => {
          setListData(data.results.books)

      },
      onError: e => {
          console.log(e.message)
      }
    })

    if (isLoading) return null;
    if (isError) return <div>{error.message}</div>;

    return (
      <>
        <InfoBlock data={listData} isLoading={isLoading} />
      </>
    )
  }
  