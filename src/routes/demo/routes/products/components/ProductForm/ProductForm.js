import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Form, Input, DatePicker, InputNumber, Select } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

@inject(({ products }) => ({
  categories: products.categories,
}))
@observer
class ProductForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { categories } = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="名称" {...formItemLayout}>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入名称',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="生产厂家" {...formItemLayout}>
          {getFieldDecorator('manufacturer', {
            rules: [
              {
                required: true,
                message: '请输入生产厂家',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="生产日期" {...formItemLayout}>
          {getFieldDecorator('productionDate', {
            rules: [
              {
                type: 'object',
                required: true,
                message: '请输入生产日期',
              },
            ],
          })(<DatePicker />)}
        </FormItem>
        <FormItem label="价格" {...formItemLayout}>
          {getFieldDecorator('price', {
            rules: [
              {
                type: 'number',
                required: true,
                message: '请输入价格',
              },
            ],
          })(<InputNumber step={0.01} min={0.0} precision={2} />)}
        </FormItem>
        <FormItem label="类别" {...formItemLayout}>
          {getFieldDecorator('category', {
            rules: [
              {
                required: true,
                message: '请选择类别',
              },
            ],
          })(
            <Select placeholder="请选择类别">
              {categories.map(item => (
                <Option key={item.value} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem label="备注" {...formItemLayout}>
          {getFieldDecorator('remark', {
            rules: [
              {
                max: 200,
                message: '备注字数不能超过200字',
              },
            ],
          })(<TextArea rows={4} />)}
        </FormItem>
      </Form>
    )
  }
}

ProductForm.propTypes = {
  form: PropTypes.object.isRequired,
}

ProductForm.wrappedComponent.propTypes = {
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
      remark: { value: data.remark },
    }
  },
})(ProductForm)
