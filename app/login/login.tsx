import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { loginStyles } from './styles';
import { useCallback, useEffect, useState } from 'react';
import LoginInput from './components/LoginInput';
import { Button } from '@rneui/base';

const Tabs = ({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View style={loginStyles.tabWrap}>
      <Text
        style={tabIndex === 0 ? loginStyles.tabItemActive : loginStyles.tabItem}
        onPress={() => {
          setTabIndex(0);
        }}
      >
        账号登录
      </Text>
      <Text
        style={[
          tabIndex === 1 ? loginStyles.tabItemActive : loginStyles.tabItem,
          {
            marginLeft: 27,
          },
        ]}
        onPress={() => {
          setTabIndex(1);
        }}
      >
        验证码登录
      </Text>
    </View>
  );
};
const LoginByAccount = ({
  username,
  setUserName,
  password,
  setPassword,
}: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View
      style={{
        marginTop: 35,
      }}
    >
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={username}
          setValue={setUserName}
          placeholder="请输入邮箱/手机号"
          rules={['require', 'phone|email']}
          errorMsg="格式错误，请检查后重试。"
        />
      </View>
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={password}
          setValue={setPassword}
          placeholder="请输入密码"
          type="password"
        />
      </View>
      <Text style={loginStyles.forget}>忘记密码?</Text>
    </View>
  );
};

const LoginByCode = ({
  username,
  setUserName,
  code,
  setCode,
}: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [count, setCount] = useState(0);
  const [tip, setTip] = useState('');
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      setTip('');
    }
  }, [count]);
  return (
    <View
      style={{
        marginTop: 35,
      }}
    >
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={username}
          setValue={setUserName}
          placeholder="请输入邮箱/手机号"
          rules={['require', 'phone|email']}
          errorMsg="格式错误，请检查后重试。"
        />
      </View>
      <View style={[loginStyles.inputWrap, loginStyles.inputCodeWrap]}>
        <View
          style={{
            flex: 1,
          }}
        >
          <LoginInput value={code} setValue={setCode} placeholder="请输入验证" tip={tip} />
        </View>
        <Button
          title={count === 0 ? '获取验证码' : '获取验证码' + count}
          type="outline"
          containerStyle={{
            marginTop: 20,
          }}
          buttonStyle={{
            borderColor: count === 0 ? '#000' : '#ccc',
            borderRadius: 60,
            width: 122,
            height: 44,
          }}
          titleStyle={{
            color: count === 0 ? '#000' : '#ccc',
            fontSize: 14,
          }}
          onPress={() => {
            if (count === 0) {
              setCount(60);
              setTip('验证码已发送');
            }
          }}
        />
      </View>
    </View>
  );
};

const LoginItem = ({ setType }: { setType: React.Dispatch<React.SetStateAction<string>> }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  return (
    <>
      <Tabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
      {tabIndex === 0 && (
        <LoginByAccount
          username={username}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      )}
      {tabIndex === 1 && (
        <LoginByCode username={username} setUserName={setUserName} code={code} setCode={setCode} />
      )}
      <View
        style={[
          loginStyles.inputWrap,
          {
            marginTop: 40,
          },
        ]}
      >
        <Button
          title="登录"
          buttonStyle={{
            backgroundColor: '#0F358E',
            borderRadius: 60,
            height: 44,
          }}
          titleStyle={{
            fontSize: 14,
          }}
        />
      </View>
      <View style={loginStyles.inputWrap}>
        <Button
          title="没有账号？点击注册"
          buttonStyle={{
            backgroundColor: '#fff',
            height: 44,
          }}
          titleStyle={{
            color: '#000',
            fontSize: 14,
          }}
          onPress={() => {
            setType('register');
          }}
        />
      </View>
    </>
  );
};

const RegisterFirstStep = ({
  inviteCode,
  setInviteCode,
  username,
  setUserName,
  code,
  setCode,
}: {
  inviteCode: string;
  setInviteCode: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [count, setCount] = useState(0);
  const [tip, setTip] = useState('');
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      setTip('');
    }
  }, [count]);
  return (
    <>
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={inviteCode}
          setValue={setInviteCode}
          placeholder="请输入邀请码"
          rules={['inviteCode']}
          errorMsg="格式错误，请检查后重试。"
        />
      </View>
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={username}
          setValue={setUserName}
          placeholder="请输入邮箱/手机号"
          rules={['require', 'phone|email']}
          errorMsg="格式错误，请检查后重试。"
        />
      </View>
      <View style={[loginStyles.inputWrap, loginStyles.inputCodeWrap]}>
        <View
          style={{
            flex: 1,
          }}
        >
          <LoginInput value={code} setValue={setCode} placeholder="请输入验证" tip={tip} />
        </View>
        <Button
          title={count === 0 ? '获取验证码' : '获取验证码' + count}
          type="outline"
          containerStyle={{
            marginTop: 20,
          }}
          buttonStyle={{
            borderColor: count === 0 ? '#000' : '#ccc',
            borderRadius: 60,
            width: 122,
            height: 44,
          }}
          titleStyle={{
            color: count === 0 ? '#000' : '#ccc',
            fontSize: 14,
          }}
          onPress={() => {
            if (count === 0) {
              setCount(60);
              setTip('验证码已发送');
            }
          }}
        />
      </View>
    </>
  );
};
const RegisterSecondStep = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <View style={loginStyles.inputWrap}>
        <LoginInput
          value={password}
          setValue={setPassword}
          placeholder="请输入密码"
          type="password"
        />
      </View>
      <Text>密码要求：</Text>
      <View>
        <View></View>
        <Text>不低于8位字符</Text>
      </View>
      <View>
        <View></View>
        <Text>包含英文字母</Text>
      </View>
      <View>
        <View></View>
        <Text>包含阿拉伯数字</Text>
      </View>
    </>
  );
};

const RegisterItem = ({ setType }: { setType: React.Dispatch<React.SetStateAction<string>> }) => {
  const [username, setUserName] = useState('');
  const [code, setCode] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  return (
    <View style={loginStyles.registerWrap}>
      <Text style={loginStyles.registerTitle}>注册账号</Text>
      <Text style={loginStyles.registerStep}>第{step}/2步</Text>
      {step === 1 && (
        <RegisterFirstStep
          username={username}
          setUserName={setUserName}
          code={code}
          setCode={setCode}
          inviteCode={inviteCode}
          setInviteCode={setInviteCode}
        />
      )}
      {step === 2 && <RegisterSecondStep password={password} setPassword={setPassword} />}
      <View
        style={[
          loginStyles.inputWrap,
          {
            marginTop: 40,
          },
        ]}
      >
        <Button
          title={step === 1 ? '下一步，设置登录密码' : '注册'}
          buttonStyle={{
            backgroundColor: '#0F358E',
            borderRadius: 60,
            height: 44,
          }}
          titleStyle={{
            fontSize: 14,
          }}
          onPress={() => {
            if (step === 1) {
              setStep(2);
            }
          }}
        />
      </View>
      <View style={loginStyles.inputWrap}>
        <Button
          title="返回登录"
          buttonStyle={{
            backgroundColor: '#fff',
            height: 44,
          }}
          titleStyle={{
            color: '#000',
            fontSize: 14,
          }}
          onPress={() => {
            setType('login');
          }}
        />
      </View>
    </View>
  );
};

const login = () => {
  const [type, setType] = useState('login');
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={loginStyles.blueBg}>
        <Text style={loginStyles.bgText1}>智交易，易万物，跨全球</Text>
        <Text style={loginStyles.bgText2}>EASY CROSS-BORDER E-COMMERCE</Text>
      </View>
      <View
        style={[
          loginStyles.mainWrap,
          {
            height: type === 'login' ? 458 : 533,
          },
        ]}
      >
        {type === 'login' && <LoginItem setType={setType} />}
        {type === 'register' && <RegisterItem setType={setType} />}
      </View>
    </View>
  );
};

export default login;
