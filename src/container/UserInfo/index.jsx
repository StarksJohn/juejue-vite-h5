import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Button, FilePicker, Input, Toast, Cell, Radio, DatePicker, Slider, Picker } from 'zarm'
import { useHistory } from 'react-router-dom'
import Header from '@/components/Header'
import axios from 'axios'
import { get, post, imgUrlTrans } from '@/api'
import { baseUrl } from '@/config'
import s from './style.module.less'
import { dateTools } from '@/tools'

const init_birthday = {
  visible: false,
  value: null,
  wheelDefaultValue: '1990-01-01',
  showValue: ''
}

const educationInitData = [
  { value: '0', label: '不识字或识字很少' },
  { value: '1', label: '小学' },
  { value: '2', label: '初中' },
  { value: '3', label: '高中/职高/中专' },
  { value: '4', label: '大专' },
  { value: '5', label: '本科' },
  { value: '6', label: '硕士及以上' }
]
const initEducationState = {
  visible: false,
  value: '5',
  dataSource: educationInitData
}
const marriageInitData = [
  { value: '0', label: '未婚' },
  { value: '1', label: '在婚' },
  { value: '2', label: '分居' },
  { value: '3', label: '离异' },
  { value: '4', label: '丧偶' }
]
const marriageInitState = {
  visible: false,
  value: '1',
  dataSource: marriageInitData
}

const initFamilyIncomeData = [
  { value: '0', label: '5万元以下' },
  { value: '1', label: '5到10万元' },
  { value: '2', label: '10-15万元' },
  { value: '3', label: '15-20万元' },
  { value: '4', label: '20-30万元' },
  { value: '5', label: '30万以上' },
  { value: '6', label: '不知道' }
]
const initFamilyIncomeState = {
  visible: false,
  value: '1',
  dataSource: initFamilyIncomeData
}
const initnationalityData = [
  { value: '0', label: '汉族' },
  { value: '1', label: '回族' },
  { value: '2', label: '苗族' },
  { value: '3', label: '维吾尔族' },
  { value: '4', label: '满族' },
  { value: '5', label: '壮族' },
  { value: '6', label: '其他' }
]
const initnationalityState = {
  visible: false,
  value: '1',
  dataSource: initnationalityData
}

/**
 * 个人资料页
 * @constructor
 */
const UserInfo = () => {
  const history = useHistory()
  // const [user, setUser] = useState({})
  // const [avatar, setAvatar] = useState('')
  // const [signature, setSignature] = useState('')
  // const token = localStorage.getItem('token')
  const [name, setName] = useState('')
  const [sex, setSex] = useState('男')
  const [birthday, setBirthday] = useState(init_birthday)
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [registered, setRegistered] = useState('是')// 是否本地户籍
  const [population, setPopulation] = useState('')// 家庭人口数
  const [education, setEducation] = useState(initEducationState)
  const [marriage, setMarriage] = useState(marriageInitState)
  const [familyIncome, setFamilyIncome] = useState(initFamilyIncomeState)
  const [disabled, setDisabled] = useState(true)
  const [nationality, setNationality] = useState(initnationalityState)
  const focusInput = useRef()

  useEffect(() => {
    // getUserInfo()
  }, [])

  const checkState = useCallback(() => {

  }, [])

  // 获取用户信息
  const getUserInfo = async () => {
    const { data } = await get('/api/user/get_userinfo')
    setUser(data)
    setAvatar(imgUrlTrans(data.avatar))
    setSignature(data.signature)
  }

  const handleSelect = (file) => {
    console.log('file.file', file.file)
    if (file && file.file.size > 200 * 1024) {
      Toast.show('上传头像不得超过 200 KB！！')
      return
    }
    const formData = new FormData()
    formData.append('file', file.file)
    axios({
      method: 'post',
      url: `${baseUrl}/api/upload`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    }).then(res => {
      setAvatar(imgUrlTrans(res.data))
    })
  }

  const save = async () => {
    // const { data } = await post('/api/user/edit_userinfo', {
    //   signature,
    //   avatar
    // })

    // Toast.show('修改成功')
    // history.goBack()
  }

  return <>
    <Header title="用户信息" />
    <div className={s.userinfo}>
      <Cell title="姓名:">
        <Input
          clearable
          type="text"
          placeholder="请输入姓名"
          value={name}
          onChange={(value) => {
            setName(value)
            console.log(`onChange: ${value}`)
          }}
          // onBlur={(value) => console.log(`UserInfo onBlur: ${value}`)}
        />
      </Cell>
      <Cell title={`性别:   ${sex}`}
            description={
              <Radio.Group
                type="button"
                value={sex}
                onChange={(value) => {
                  console.log(`性别 to ${value}`)
                  setSex(value)
                }}
              >
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>
            }
      >
      </Cell>
      <Cell title={`出生年月: ${birthday.showValue}`}
            description={
              <Button size="xs" onClick={() => setBirthday({
                visible: true,
                value: birthday.value,
                wheelDefaultValue: birthday.wheelDefaultValue,
                showValue: birthday.showValue
              })}>
                 请选择
              </Button>
            }
      >
      </Cell>
      <Cell title={`身高: ${height}cm`}>
        <Slider defaultValue={height} min={140} max={250} onChange={(value) => {
          console.log('身高 onChange =', value)
          setHeight(value)
        }}/>
      </Cell>
      <Cell title={`体重: ${weight}kg`}>
        <Slider defaultValue={weight} min={25} max={125} onChange={(value) => {
          console.log('体重 onChange =', value)
          setWeight(value)
        }}/>
      </Cell>
      <Cell title={`民族: ${initnationalityData[nationality.value].label}`}
            description={
              <Button size="xs" onClick={() => {
                setNationality({
                  ...nationality, visible: true
                })
              }
              }>
                请选择
              </Button>
            }
      >
      </Cell>
      <Cell title={`婚姻情况: ${marriageInitData[marriage.value].label}`}
            description={
              <Button size="xs" onClick={() => {
                setMarriage({
                  ...marriage, visible: true
                })
              }
              }>
                请选择
              </Button>
            }
      >
      </Cell>
      <Cell title={`文化程度: ${educationInitData[education.value].label}`}
        description={
          <Button size="xs" onClick={() => {
            setEducation({
              ...education, visible: true
            })
          }
          }>
            请选择
          </Button>
        }
      >
      </Cell>
      <Cell title={'家庭人口数: '}>
        <Input
          ref={focusInput}
          type="number"
          placeholder="请输入家庭人口数"
          value={population}
          onChange={setPopulation}
        />
      </Cell>
      <Cell title={`家庭年收入: ${initFamilyIncomeData[familyIncome.value].label}`}
            description={
              <Button size="xs" onClick={() => {
                setFamilyIncome({
                  ...familyIncome, visible: true
                })
              }
              }>
                请选择
              </Button>
            }
      >
      </Cell>
      <Cell title={`您是本地户籍吗:${registered}`}
            description={
              <Radio.Group
                type="button"
                value={registered}
                onChange={(value) => {
                  console.log(`户籍 to ${value}`)
                  setRegistered(value)
                }}
              >
                <Radio value="是">是</Radio>
                <Radio value="否">否</Radio>
              </Radio.Group>
            }
      >
      </Cell>
      <Button disabled={disabled} onClick={save} style={{ marginTop: 50 }} block theme="primary">保存</Button>
    </div>
    <DatePicker
      visible={birthday.visible}
      mode="date"
      value={birthday.value}
      wheelDefaultValue={birthday.wheelDefaultValue}
      onOk={(value) => {
        console.log('出生日期 onOk value=', value)
        const date = dateTools.getDateData(value)
        console.log('出生日期 onOk date=', date)

        setBirthday({
          visible: false,
          value,
          wheelDefaultValue: birthday.wheelDefaultValue,
          showValue: `${date.y}-${date.m}-${date.d}`
        })
      }}
      onCancel={() => setBirthday({
        visible: false,
        value: birthday.value,
        wheelDefaultValue: birthday.wheelDefaultValue,
        showValue: birthday.showValue
      })}
    />
    <Picker
      visible={education.visible}
      value={education.value}
      dataSource={educationInitData}
      onOk={(selected) => {
        console.log('education Picker onOk: ', selected)
        setEducation({ visible: false, value: selected[0].value, label: selected[0].label })
      }}
      onCancel={() => setEducation({ ...education, visible: false })
      }
    />
    <Picker
      visible={marriage.visible}
      value={marriage.value}
      dataSource={marriageInitData}
      onOk={(selected) => {
        console.log('marriage Picker onOk: ', selected)
        setMarriage({ visible: false, value: selected[0].value, label: selected[0].label })
      }}
      onCancel={() => setMarriage({ ...marriage, visible: false })
      }
    />
    <Picker
      visible={familyIncome.visible}
      value={familyIncome.value}
      dataSource={initFamilyIncomeData}
      onOk={(selected) => {
        console.log('familyIncome Picker onOk: ', selected)
        setFamilyIncome({ visible: false, value: selected[0].value, label: selected[0].label })
      }}
      onCancel={() => setFamilyIncome({ ...familyIncome, visible: false })
      }
    />
    <Picker
      visible={nationality.visible}
      value={nationality.value}
      dataSource={initnationalityData}
      onOk={(selected) => {
        console.log('nationality Picker onOk: ', selected)
        setNationality({ visible: false, value: selected[0].value, label: selected[0].label })
      }}
      onCancel={() => setNationality({ ...nationality, visible: false })
      }
    />
  </>
}

export default UserInfo
