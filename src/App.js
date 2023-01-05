import React, { useEffect, useState } from "react";
import { Avatar, Button, Carousel, List, Skeleton, Slider, Input } from "antd";
import "./App.css";
import axios from "axios";
const count = 3;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [nome, setNome] = useState('')
  const { Search } = Input;

  const getAllCharacters = () => {
    return axios.get("https://rickandmortyapi.com/api/character/", {
      params: {
        name: nome
      }
    }).then((res) => setList(res.data.results)).then((res) => setList(res.data.results))
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      setInitLoading(false);
      setData(res.data.results);
      setList(res.data.results);
    });

    getAllCharacters()
  }, [nome]);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const cores = (status) => status === "Alive" ? "green" : status === "Dead" ? "red" : "grey";

  return (
    <div className="container">
      <Search 
        placeholder="encontre alguem..."
        onChange={e => setNome(e.target.value)}
        className="search"
      />
      <section className="list">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                key={item.id}
                  avatar={<Avatar src={item.image} />}
                  title={<a href={item.url}>{item.name}</a>}
                  description={
                    <p
                      style={{
                        color: cores(item.status),
                        paddin: 0,
                        margin: 0,
                      }}
                    >
                      {item.status}
                    </p>
                  }
                />

                <div>{item.species}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default App;
