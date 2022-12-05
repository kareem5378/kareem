import React from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./bamboozled.css";
const Viewdata = () => {
  const products = [
    { id: 1, name: "Bassam", animal: "Daddy" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Foster", animal: "Tiger" },
    { id: 5, name: "Tracy", animal: "Bear" },
    { id: 6, name: "Joesph", animal: "Lion" },
    { id: 7, name: "Tania", animal: "Deer" },
    { id: 8, name: "Chelsea", animal: "Tiger" },
    { id: 9, name: "Benedict", animal: "Tiger" },
    { id: 10, name: "Chadd", animal: "Lion" },
    { id: 11, name: "Delphine", animal: "Deer" },
    { id: 12, name: "Elinore", animal: "Bear" },
    { id: 13, name: "Stokes", animal: "Tiger" },
    { id: 14, name: "Tamara", animal: "Lion" },
    { id: 15, name: "Zackery", animal: "Bear" },
  ];

  const columns = [
    { dataField: "id", text: "ID", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "animal", text: "Animal", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "asc",
    },
  ];
  const pagination = paginationFactory({
    sizePerPage: 5,
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <>
      <br />
      <br />
      <Link
        to="/"
        style={{
          color: "white",
          fontSize: 20,
          borderRadius: 21,
        }}
      >
        <h1 className="header1">Back</h1>
      </Link>
      <Link
        to="/items"
        style={{
          color: "white",
          fontSize: 20,
          borderRadius: 21,
        }}
      >
        <h1 className="header1">Items</h1>
      </Link>
      <h1>This is my first Bootstrap Table</h1>
      <hr />
      <p>
        A table is a piece of furniture with a flat top supported by one or more
        legs. We put things on a table, often for a short time, for example food
        and knives and forks, etc. at a meal, cups for drinks, a book, a map,
        writing paper when writing, and things for hobbies. We also put things
        on tables for a longer time, for example a TV, computer or decorations
        (pretty things). Often we put a cloth on the table, flat on the top.
        There are traditional ways of putting the cloth, knives and forks and
        food on the table for meals. We can make some tables bigger, for example
        by pulling the top out. We can also fold some tables to transport them
        better, for example for camping. There are also small tables in trains
        and planes which we can fold or open. Some round tables come with a Lazy
        Susan. This is a rotating piece of wood in the center of the table. A
        table for use outdoors is called a picnic table. Traditionally, tables
        in Japan, chabudai, are low, sometimes round tables, for tea and food.
        The name of the international organization Mensa is from the Latin word
        for table.A table is a piece of furniture with a flat top supported by
        one or more legs. We put things on a table, often for a short time, for
        example food and knives and forks, etc. at a meal, cups for drinks, a
        book, a map, writing paper when writing, and things for hobbies. We also
        put things on tables for a longer time, for example a TV, computer or
        decorations (pretty things). Often we put a cloth on the table, flat on
        the top. There are traditional ways of putting the cloth, knives and
        forks and food on the table for meals. We can make some tables bigger,
        for example by pulling the top out. We can also fold some tables to
        transport them better, for example for camping. There are also small
        tables in trains and planes which we can fold or open. Some round tables
        come with a Lazy Susan. This is a rotating piece of wood in the center
        of the table. A table for use outdoors is called a picnic table.
        Traditionally, tables in Japan, chabudai, are low, sometimes round
        tables, for tea and food. The name of the international organization
        Mensa is from the Latin word for table.A table is a piece of furniture
        with a flat top supported by one or more legs. We put things on a table,
        often for a short time, for example food and knives and forks, etc. at a
        meal, cups for drinks, a book, a map, writing paper when writing, and
        things for hobbies. We also put things on tables for a longer time, for
        example a TV, computer or decorations (pretty things). Often we put a
        cloth on the table, flat on the top. There are traditional ways of
        putting the cloth, knives and forks and food on the table for meals. We
        can make some tables bigger, for example by pulling the top out. We can
        also fold some tables to transport them better, for example for camping.
        There are also small tables in trains and planes which we can fold or
        open. Some round tables come with a Lazy Susan. This is a rotating piece
        of wood in the center of the table. A table for use outdoors is called a
        picnic table. Traditionally, tables in Japan, chabudai, are low,
        sometimes round tables, for tea and food. The name of the international
        organization Mensa is from the Latin word for table.A table is a piece
        of furniture with a flat top supported by one or more legs. We put
        things on a table, often for a short time, for example food and knives
        and forks, etc. at a meal, cups for drinks, a book, a map, writing paper
        when writing, and things for hobbies. We also put things on tables for a
        longer time, for example a TV, computer or decorations (pretty things).
        Often we put a cloth on the table, flat on the top. There are
        traditional ways of putting the cloth, knives and forks and food on the
        table for meals. We can make some tables bigger, for example by pulling
        the top out. We can also fold some tables to transport them better, for
        example for camping. There are also small tables in trains and planes
        which we can fold or open. Some round tables come with a Lazy Susan.
        This is a rotating piece of wood in the center of the table. A table for
        use outdoors is called a picnic table. Traditionally, tables in Japan,
        chabudai, are low, sometimes round tables, for tea and food. The name of
        the international organization Mensa is from the Latin word for table.A
        table is a piece of furniture with a flat top supported by one or more
        legs. We put things on a table, often for a short time, for example food
        and knives and forks, etc. at a meal, cups for drinks, a book, a map,
        writing paper when writing, and things for hobbies. We also put things
        on tables for a longer time, for example a TV, computer or decorations
        (pretty things). Often we put a cloth on the table, flat on the top.
        There are traditional ways of putting the cloth, knives and forks and
        food on the table for meals. We can make some tables bigger, for example
        by pulling the top out. We can also fold some tables to transport them
        better, for example for camping. There are also small tables in trains
        and planes which we can fold or open. Some round tables come with a Lazy
        Susan. This is a rotating piece of wood in the center of the table. A
        table for use outdoors is called a picnic table. Traditionally, tables
        in Japan, chabudai, are low, sometimes round tables, for tea and food.
        The name of the international organization Mensa is from the Latin word
        for table.
      </p>
      <div className="App">
        <hr />
        <h1>Information Table</h1>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          striped
          pagination={pagination}
        />
      </div>
      <hr />
      <p>
        This table shows a dataset of IDs, Names and Animals A table is an
        arrangement of information or data, typically in rows and columns, or
        possibly in a more complex structure. Tables are widely used in
        communication, research, and data analysis. Tables appear in print
        media, handwritten notes, computer software, architectural
        ornamentation, traffic signs, and many other places. The precise
        conventions and terminology for describing tables vary depending on the
        context. Further, tables differ significantly in variety, structure,
        flexibility, notation, representation and use Information or data
        conveyed in table form is said to be in tabular format (adjective). In
        books and technical articles, tables are typically presented apart from
        the main text in numbered and captioned floating blocks.
      </p>
      <hr />
      <br />
    </>
  );
};

export default Viewdata;
