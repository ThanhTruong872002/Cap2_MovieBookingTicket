import { Select, DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import '../../index.css'
import { RangePickerProps } from 'antd/es/date-picker/generatePicker'
import { Table } from 'antd'
import type { TableProps } from 'antd'

interface DataType {
  time: string
  mode: string
  info: string
  amount: string
  score: string
}

export default function TransitionHistory() {
  const items = ['Đặt vé', 'Điểm RP']
  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleChangeMonth = (value: dayjs.Dayjs | null) => {
    if (value) {
      console.log(value.format('MM/YYYY'))
    }
  }

  const disabledDate: RangePickerProps<Dayjs>['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day')
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'stt',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
    },
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ]

  const data = []

  for (let i = 0; i < 15; i++) {
    data.push({
      time: `Time ${i + 1}`,
      mode: `Mode ${i + 1}`,
      info: `Info ${i + 1}`,
      amount: `Amount ${i + 1}`,
      score: `Score ${i + 1}`,
    })
  }

  return (
    <div className='w-[75%] flex flex-col gap-20'>
      <div className='flex justify-between'>
        <h1 className='text-white text-[32px] font-semibold uppercase'>lịch sử giao dịch</h1>
        <div className='flex gap-10'>
          <Select
            style={{ width: '200px' }}
            dropdownStyle={{ background: 'transparent' }}
            defaultValue={items[0]}
            onChange={handleChange}
          >
            {items.map((item, index) => (
              <Select.Option key={index} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>

          <DatePicker
            allowClear={false}
            style={{ width: '200px' }}
            disabledDate={disabledDate}
            defaultValue={dayjs()}
            onChange={handleChangeMonth}
            picker='month'
          />
        </div>
      </div>
      <Table columns={columns} dataSource={data} bordered footer={() => 'Tổng cộng'} />
    </div>
  )
}
