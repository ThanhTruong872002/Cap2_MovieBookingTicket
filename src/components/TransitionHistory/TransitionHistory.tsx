import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message } from 'antd'

export default function TransitionHistory() {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.')
    console.log('click left button', e)
  }

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
  }

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ]

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h1 className='text-white text-[32px] font-semibold uppercase'>lịch sử giao dịch</h1>
        <div className='flex gap-10'>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
            Đặt vé
          </Dropdown.Button>

          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
            Đặt vé
          </Dropdown.Button>
        </div>
      </div>
    </div>
  )
}
