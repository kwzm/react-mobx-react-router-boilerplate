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
              {getFieldDecorator('name')(<Input />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="生产商" {...formItemLayout}>
              {getFieldDecorator('manufacturer')(<Input />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="类别" {...formItemLayout}>
              {getFieldDecorator('category')(
                <Select placeholder="请选择类别">
                  {categories.map(item => (
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
              {getFieldDecorator('productionDate')(<DatePicker />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="价格" {...formItemLayout}>
              {getFieldDecorator('price')(<InputNumber step={0.01} />)}
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
      productionDate: { value: moment(data.productionDate) },
      price: { value: data.price },
      category: { value: data.category },
    }
  },
  onValuesChange: (props, values) => {
    props.handleSearch(values)
  },
})(Filter)
