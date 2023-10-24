import React, { Component } from "react";
import { Checkbox, Divider, List } from "antd";

class FilterProduct extends Component {
  render() {
    const {
      checkedListPrice,
      checkedListCate,
      handleCheckboxChangePrice,
      handleCheckboxChangeCate,
    } = this.props;

    const dataPrice = [
      { id: 1, name: "Dưới 2.000.000" },
      { id: 2, name: "2.000.000" },
      { id: 3, name: "3.000.000" },
      { id: 4, name: "Trên 4.000.000" },
    ];

    const dataCate = [
      { id: 1, name: "Yến tinh chế" },
      { id: 2, name: "Yến thô" },
      { id: 3, name: "Yến chưng sẵn" },
      { id: 4, name: "Yến tươi" },
    ];

    return (
      <>
        <div style={{ width: "100%" }}>
          <Checkbox.Group
            onChange={handleCheckboxChangePrice}
            value={checkedListPrice}
            style={{ width: "100%" }}
          >
            <List
              header="Lọc sản phẩm theo giá"
              bordered
              style={{ width: "100%" }}
              dataSource={dataPrice}
              renderItem={(item) => (
                <List.Item>
                  <Checkbox value={item.id}>{item.name}</Checkbox>
                </List.Item>
              )}
            />
          </Checkbox.Group>
          <Divider />
          <Checkbox.Group
            onChange={handleCheckboxChangeCate}
            value={checkedListCate}
            style={{ width: "100%" }}
          >
            <List
              header="Lọc sản phẩm theo loại"
              bordered
              style={{ width: "100%" }}
              dataSource={dataCate}
              renderItem={(item) => (
                <List.Item>
                  <Checkbox value={item.id}>{item.name}</Checkbox>
                </List.Item>
              )}
            />
          </Checkbox.Group>
        </div>
      </>
    );
  }
}

export default FilterProduct;
