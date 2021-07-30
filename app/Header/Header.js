import React from 'react';

const Header = ({
  onPageChange,
  page,
}) => {
  const navbarItems = [
    { key: 'HOME', value: 'Home' }, 
    { key: 'RESUME', value: '简历' }, 
    { key: 'SERVICES', value: 'Services' }, 
    { key: 'BLOG', value: 'Blog' }, 
    { key: 'CONTACT', value: 'Contact' }
  ];

  return (
    <Nav>
      <Left>
        <Logo className="logo">
          <Highlight>Tifa</Highlight>
          Lockhart
        </Logo>
      </Left>
      <Right>
        <Flex>
          {/* 会不会引起混乱？会！ -> key [在 list 里面必须唯一] -> 解决了混乱问题 */}
          {/* 没有 key 制造 key */}
          {/* 如果是后端取数据去渲染，那就一定有 key，数据库里面是有 pk */}
          {/* 如果实在没办法，那就用 index 吧，非常非常大的性能隐患 */}
          {navbarItems.map((navbarItem) => (
            // props
            // styled components -> Component, Props
            <NavbarItem 
              // camelCase
              // pass javascript function
              // caller? 
              onClick={() => onPageChange(navbarItem.key)}
              key={navbarItem.key}
              active={page === navbarItem.key} 
              href={navbarItem.value}
            >
              {navbarItem.value}
            </NavbarItem>
          ))}
        </Flex>
      </Right>
    </Nav>
  );
}

export default Header;