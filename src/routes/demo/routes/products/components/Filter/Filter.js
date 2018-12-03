import React from 'react'
import moment from 'moment'
import { inject, observer, propTypes as ObservablePropTypes } from 'mobx-react'
import { Form, Row, Col, Input, InputNumber, Select, DatePicker, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

@inject(({ products }) => ({
  categories: products.categories,
}))
@observer
class Filter extends React.Component {
  handleReset = () => {
    this.props.form.resetFields()
    this.props.handleSearch()
  }

  handlePressEnter = (e, key) => {
    this.props.handleSearch({
      [key]: e.target.value,
    })
  }

  handleChange = (val, key) => {
    this.props.handleSearch({
      [key]: val,
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      categories,
    } = this.props
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    }

    return (
      <Form>
        <Row gutter={40}>
          <Col span={8}>
            <FormItem label="名称" {...formItemLayout}>
              {getFieldDecorator('name')(
                <Input onPressEnter={(e) => this.handlePressEnter(e, 'name')} />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="生产商" {...formItemLayout}>
              {getFieldDecorator('manufacturer')(
                <Input onPressEnter={(e) => this.handlePressEnter(e, 'manufacturer')} />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="类别" {...formItemLayout}>
              {getFieldDecorator('category')(
                <Select
                  placeholder="请选择类别"
                  onChange={(val) => this.handleChange(val, 'category')}
                >
                  {categories.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={8}>
            <FormItem label="生产日期" {...formItemLayout}>
              {getFieldDecorator('productionDate')(
                <DatePicker onChange={(val) => this.handleChange(val, 'productionDate')} />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="价格" {...formItemLayout}>
              {getFieldDecorator('price')(
                <InputNumber
                  min={0.0}
                  precision={2}
                  step={0.01}
                  onChange={(val) => this.handleChange(val, 'price')}
                />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <Button style={{ float: 'right' }} onClick={this.handleReset}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

Filter.wrappedComponent.propTypes = {
  categories: ObservablePropTypes.observableArray.isRequired,
}

export default Form.create({
  mapPropsToFields: ({ data = {} }) => {
    return {
      name: { value: data.name },
      manufacturer: { value: data.manufacturer },
      productionDate: { value: data.productionDate ? moment(data.productionDate) : null },
      price: { value: data.price },
      category: { value: data.category },
    }
  },
})(Filter)
