import { getList } from "@/api/api";
import ListBlock from "@/mocules/Lists/ListBlock";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function ListTemplate() {

    const [list, setList] = useState([]);

    const {isLoading, isError, data, error} = useQuery("getList", getList, {
        retry: 0,
        onSuccess: data => {
            console.log(data)
            setList(data.results)
        },
        onError: e => {
            console.log(e.message)
        }
    })

    return (
      <>
        <ListBlock data={list} header={"THE NEW YORK TIMES BEST SELLER EXPLORER"} />
      </>
    )
  }
  